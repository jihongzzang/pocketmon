const Component = () => {
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      This has a hotpink background.
    </div>
  );
};

function App() {
  return <Component />;
}

export default App;
