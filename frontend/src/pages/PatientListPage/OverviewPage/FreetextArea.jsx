import { useState, useEffect, useContext, memo } from 'react';
import { AzureClient } from '@fluidframework/azure-client';
import { InsecureTokenProvider } from '@fluidframework/test-client-utils';
import { ConnectionState, SharedString } from 'fluid-framework';
import { CollaborativeTextArea } from './CollaborativeTextArea/CollaborativeTextArea';
import { SharedStringHelper } from '@fluid-experimental/react-inputs';
import { AppContext } from '../../../utils/AppContextProvider';

// Configure the fluid relay
const config = {
    tenantId: import.meta.env.VITE_FLUID_TENANT_ID, // Load tenant ID from environment variables
    tokenProvider: new InsecureTokenProvider(
        import.meta.env.VITE_FLUID_PRIMARY_KEY // Load primary key from environment variables
    ),
    endpoint: import.meta.env.VITE_FLUID_ENDPOINT, // Load endpoint from environment variables
    type: 'remote',
};

// Main Fluid component, using memo() to reduce unnecessary and costly re-rendering of the component
const FreetextArea = memo((props) => {
    const sharedString = useSharedString(props.container, props.patient_id);

    if (sharedString) {
        return (
            <div className='app'>
                <CollaborativeTextArea
                    sharedStringHelper={new SharedStringHelper(sharedString)}
                />
            </div>
        );
    } else {
        return <div />;
    }
});

function useSharedString(container_id, patient_id) {
    //sharedString is a state variable to store the SharedString object fetched from the container.
    const [sharedString, setSharedString] = useState();
    const { createContainer } = useContext(AppContext);

    const getFluidData = async () => {
        const clientProps = {
            connection: config,
        };

        const client = new AzureClient(clientProps);

        // Configuring fluid container.
        const containerSchema = {
            initialObjects: {
                sharedString: SharedString,
            },
        };

        // Retrieving container from Fluid service.
        let container;
        let containerId = container_id;

        // Create new container if doesn't already exist
        if (container_id === '') {
            ({ container } = await client.createContainer(containerSchema));
            const id = await container.attach();
            // Store created container id on db
            await createContainer(patient_id, id);
            containerId = id;
            return container.initialObjects.sharedString;
        }
        // Retrieve container if already exists
        ({ container } = await client.getContainer(
            containerId,
            containerSchema
        ));
        if (container.connectionState !== ConnectionState.Connected) {
            await new Promise((resolve) => {
                container.once('connected', () => {
                    resolve();
                });
            });
        }
        return container.initialObjects.sharedString;
    };

    // Get Fluid Data on initial render and store in state.

    useEffect(() => {
        getFluidData()
            .then((data) => setSharedString(data))
            .catch((error) =>
                console.error('Error getting Fluid data:', error)
            );
    }, []);
    return sharedString;
}

export default FreetextArea;
