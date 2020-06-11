import React from "react";
import DogSkeleton from "../images/DogSkeleton.jpg";

function MainPage() {
  return (
    <div style={font}>
      <h1 style={start}>Stories written by Watson</h1>
      <h1 style={date}> Watson's first story- June 7, 2020</h1>
      <p style={title}>The Dead Dog</p>
      <img src={DogSkeleton} alt="Dog Skeleton" height="200" width="200" />
      <p style={author}>By: Watson</p>

      <p style={story}>
        Once there was a dog named Rocket. One day he went to see his friend
        Jack. They talked about an old city full of dogs. They decided to go to
        the city. When they got there they went to the market to get lunch. Then
        they went to the museum. They both thought a dog skeleton moved and it
        did. They spent the night in a panic, the skeleton dog was chasing
        everyone. Rocket and Jack, 5 years later, Rocket an Jack go back to the
        city and fight the skeleton dog. It took them 4 days to get him tired
        enough to drag him to dog jail. Dogs started to move back to the city,
        some dogs found a passage under the skeleton dog's case. Rocket and Jack
        go down the passage.
      </p>
      <p style={story}>And for the next book: The Passage</p>
      <p style={story}>
        Rocket and Jack find guards. Skeleton guards. Will they win the fight?
        What's behind the guards?
      </p>
    </div>
  );
}

const start = {
  margin: "30px",
  textAlign: "center",
  fontSize: "30px",
  fontWeight: "bold",
  textDecoration: "underline",
};
const font = {
  fontFamily: "Patrick Hand",
};

const date = {
  margin: "20px",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
};

const title = {
  textAlign: "center",
  fontSize: "20px",
};

const author = {
  textAlign: "center",
  fontSize: "20px",
};

const story = {
  margin: "40px",
  textAlign: "center",
  fontSize: "20px",
};
export default MainPage;
