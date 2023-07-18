import "./widget.scss"

const Widget = ({type}) => {
  let data;

  switch(type){
    case"best":
      data={
          title:"Best",
          counter:"122"
      };
      break;
      default:
        break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span></span>
        <span>Text</span>
        <span>Numbers</span>
      </div>
      <div className="right">
        IMGhere
      </div>
    </div>
  )
}

export default Widget