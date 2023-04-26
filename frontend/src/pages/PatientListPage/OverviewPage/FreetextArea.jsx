import { TextField } from '@mui/material'

import { useState, useEffect } from "react";
import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { ConnectionState, SharedString } from "fluid-framework";
import { CollaborativeTextArea } from '../../../CollaborativeTextArea/CollaborativeTextArea';
import { SharedStringHelper } from "@fluid-experimental/react-inputs";

export default function FreetextArea(props) {
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

}

function useSharedString(container_id, patient_id) {
  const [sharedString, setSharedString] = useState();
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
    console.log(containerId)

    if (container_id === "") {
      ({ container } = await client.createContainer(containerSchema));
      const id = await container.attach();
      //need to save id to db and set the containerId to the new id
      
      // window.location.href = id;
      // Return the Fluid SharedString object.
      console.log(id)
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

// export default function FreetextArea() {

//     return (
//         <TextField
//         id="filled-multiline-static"
//         label="Notes"
//         multiline
//         rows={5}
//         variant="filled"
//       />
//     )
// }