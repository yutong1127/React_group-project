import { useState, useEffect, useContext, memo } from "react";
import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { ConnectionState, SharedString } from "fluid-framework";
import { CollaborativeTextArea } from '../../../CollaborativeTextArea/CollaborativeTextArea';
import { SharedStringHelper } from "@fluid-experimental/react-inputs";
import { AppContext } from '../../../utils/AppContextProvider';

const FreetextArea = memo((props) => {
  const sharedString = useSharedString(props.container, props.patient_id);

  if (sharedString) {
    return (
      <div className="app">
        <CollaborativeTextArea sharedStringHelper={new SharedStringHelper(sharedString)} />
      </div>
    );
  } else {
    return <div />;
  }

})

function useSharedString(container_id, patient_id) {
  const [sharedString, setSharedString] = useState();
  const { createContainer } = useContext(AppContext)

  const getFluidData = async () => {
    // TODO 1: Configure the container.
    const client = new TinyliciousClient();
    const containerSchema = {
      initialObjects: {
        sharedString: SharedString
      }
    };

    // TODO 2: Get the container from the Fluid service.
    let container;
    let containerId = container_id;

    if (container_id === "") {
      ({ container } = await client.createContainer(containerSchema));
      const id = await container.attach();
      // Return the Fluid SharedString object.
      await createContainer(patient_id, id)
      containerId = id
      return container.initialObjects.sharedString;
    }

    ({ container } = await client.getContainer(containerId, containerSchema));
    if (container.connectionState !== ConnectionState.Connected) {
      await new Promise((resolve) => {
        container.once("connected", () => {
          resolve();
        });
      });
    }
    // TODO 3: Return the Fluid SharedString object.

    return container.initialObjects.sharedString;

  }

  // TODO 4: Get the Fluid Data data on app startup and store in the state.
  useEffect(() => {
    getFluidData()
      .then((data) => setSharedString(data));
  }, []);
  // TODO 5: Return the SharedString Object
  return sharedString;

}

export default FreetextArea;