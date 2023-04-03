import  Profile from "components/profile/Profile";
import user from "components/profile/user.json"


export default function App() {
  return (
    <div 
    style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
      >
      <Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
statsfollowers={user.stats.followers}
statsviews={user.stats.views}
statslikes={user.stats.likes}
  />
    </div>
  );
};

