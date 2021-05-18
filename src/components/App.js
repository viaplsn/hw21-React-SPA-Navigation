import './App.css';
import Post from './components/Publication.js'
import profilePic from './assets/images/Lebron-James-profile-pic.jpg'
import postImage from './assets/images/Space-Jam-2-Lola-Bunny-pic.jpeg'
import profilePic2 from './assets/images/Michael-Jordan-profile-pic.jpg'
import postImage2 from './assets/images/Space-Jam-Tune-Squad-pic.jpeg'
import profilePic3 from './assets/images/Bugs-Bunny-profile-pic.png'
import postImage3 from './assets/images/Space-Jam-2-Bugs-Bunny-pic.jpg'

function App() {
  return (
    <div className ="feed">
      <Post author={{
        name: "LeBron James",
        photo: profilePic,
        nickname: "@KingJames"
        }}
        content="Welcome to the Space Jam!! What in the matrix hell did I get myself into?!?!"
        image={postImage}
        date={"8 квіт."}
        activity = {{
          likes: "137,3 тис.",
          comments: "448",
          reposts: "11,6 тис."
        }}
      />
      <Post author={{
        name: "Michael Jordan",
        photo: profilePic2,
        nickname: "@Jumpman23"
        }}
        content="I hope it will be a worthy legacy!!!"
        image={postImage2}
        date={"9 квіт."}
        activity = {{
          likes: "154,3 тис.",
          comments: "874",
          reposts: "9,6 тис."
        }}
      />
      <Post author={{
        name: "Bugs Bunny",
        photo: profilePic3,
        nickname: "@BugsBunny"
        }}
        content="What's up doc?"
        image={postImage3}
        date={"10 квіт."}
        activity = {{
          likes: "552,3 тис.",
          comments: "4,8 тис",
          reposts: "27,6 тис."
        }}
      />
    </div>
  );
}

export default App;