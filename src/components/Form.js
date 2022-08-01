// create style here
const styles = {
  bgColor: {
    backgroundColor: "blue"
  },
  fontColor: {
    color: "white"
  }
}

// create Form component
function Form() {
  return (
    <form style={{ backgroundColor: "red" }}>
      <div >
        <label htmlFor="username" style={styles.fontColor}>
          Username
        </label>
        <input
          id="username"
          placeholder="Input username"
          style={styles.bgColor}
        />
        <Button />
      </div>
    </form>
  );
}

function Button() {
  return (
    <button style={styles.fontColor}>Click Me</button>
  )
}

export default Form
