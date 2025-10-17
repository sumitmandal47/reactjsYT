
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full p-5 overflow-x-auto w-2/3 flex  flex-nowrap gap-8"
    >
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
}

export default RightContent
