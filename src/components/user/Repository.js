function Repository({ item }) {
  return (
    <a className="anchor" target="blank" href={item.html_url}>
      <div className="repoNames">
        <h3>Name : {item.name}</h3>
        <h3>Stars : {item.stargazers_count}</h3>
        <h3>Forks: {item.forks}</h3>
      </div>
    </a>
  );
}

export default Repository;
