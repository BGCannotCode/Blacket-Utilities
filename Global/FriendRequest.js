async function sendFriendRequests() {
  const usernames = prompt("What are the usernames of the friends you want to add? Separate each username with a comma.");
  const usernameArr = usernames.split(",").map(name => name.trim());

  for (let i = 0; i < usernameArr.length; i++) {
    const username = usernameArr[i];
    const res = await fetch(`/worker/friends/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: username
      })
    });

    const data = await res.json();

    if (data.error) {
      console.error(`Failed to send friend request to ${username}. Reason: ${data.reason}`);
    } else {
      console.log(`Sent a friend request to: ${username}`);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

sendFriendRequests();
