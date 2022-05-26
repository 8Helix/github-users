function Organization({ item }) {
  return (
    <div className="organization">
      <a target="blank" href={`https://github.com/${item.login}`}>
        <img alt={item.login} src={item.avatar_url} />
      </a>
    </div>
  );
}

export default Organization;
