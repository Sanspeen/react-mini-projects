import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export function App() {
  const formattedUserName = <span>@midudev</span>;
  const vander = {
    formatUsername: formattedUserName,
    userName: "vxnder",
    name: "Vander",
    isFollowing: true,
  };
  return (
    <div className="App">
      <TwitterFollowCard
        formatUsername={formattedUserName}
        userName="midudev"
      >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUsername={formattedUserName}
        userName="pheralb"
      >
        <strong>Pablo Hernandez</strong>
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUsername={formattedUserName}
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        formatUsername={formattedUserName}
        userName="vxnder"
      />
      <TwitterFollowCard {...vander} />
    </div>
  );
}
