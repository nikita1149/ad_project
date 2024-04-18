
const InputContent = ({ setCaptionText , caption }) => {

  return (
    <div>
      <h2>Ad Content: {caption}</h2>
      <input
        type="text"
        id="message"
        name="message"
        onChange={(e)=>setCaptionText(e.target.value)}
        value={caption}
      />
    </div>
  );
};

export default InputContent;

