import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';
import Statistic from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import FriendList from 'components/friendList/FriendList';
import friends from 'components/friendList/friends.json';
import TransactionHistory from 'components/transaction/TransactionHistory';
import transactions from 'components/transaction/transactions.json';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
