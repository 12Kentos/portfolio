import Image from "next/image";

export default function Project(props) {
  return (
    <div className={`${props.className}`}>
      <Image className={props.imgClasses} src={props.image} />
    </div>
  );
}
