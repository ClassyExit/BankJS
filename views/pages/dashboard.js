module.exports = ({ currentUser }) => {
  return `
        <p> Dashboard</p>

        <div class="signout">
            <a href="/signout">
                <button>Sign out</button>
            </a>
        </div>

        <p> Email: ${currentUser.email}</p>
        <p> ID: ${currentUser.id}</p>
        
    `;
};
