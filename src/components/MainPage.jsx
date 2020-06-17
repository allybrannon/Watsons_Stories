import React from "react";
import DogSkeleton from "../images/DogSkeleton.jpg";
import Gold from "../images/Gold.png";

function MainPage() {
  return (
    <div style={font}>
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
      <p style={story}>
        Rocket and Jack find guards. Skeleton guards. Will they win the fight?
        What's behind the guards?
      </p>
      <hr />
      <div style={font}>
        <h1 style={date}>Watson's second story - June 14, 2020</h1>
        <p style={title}>The passage</p>
        <img src={Gold} alt="gold bricks" height="200" width="200" />
        <p style={author}>By: Watson</p>
        <p style={story}>
          In our last story Rocket and Jack find guards, Jack says he wants to
          go back. Then Rocket convinces him to fight the guards. After 10 min
          they were dead. Well that was easy, said Jack. They soon found that
          they were in a maze with traps, the first trap they set made it so
          they could not get out of the maze. 3 hours in the maze is when they
          found an exit, but they also found a monster so they threw a ball to
          distract the monster so they could get by. Once they were past the
          monster they found themselves in the treasure room. They got some gold
          and went through a door they found under the gold there was 1 guard in
          their way and they took care of him and eventually they found a
          trapdoor and they pushed it open and were outside the museum and they
          told everyone and some dogs boarded the passages. Rocket and Jack were
          happy and went home.
        </p>
        <hr />
      </div>
    </div>
  );
}

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
