import React from 'react';
import { Div } from "../ui/background";
import Show from "../Components/Show";

export default function Contact() {
  return (
    <>
      <Div setColor="Yellow">Contact
            <br></br>
            <Show>
                <Show.Labels test="hello">Let Count of Number</Show.Labels>
                <Show.Decreements icon="-"/>
                <Show.Counts/>
                <Show.Increements icon="+" />
            </Show>
      </Div>
    </>
  );
}
