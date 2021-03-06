import './Title.css'
//you can pass in props and do props.title/subtitle or 
//further destructure and add in title, subtitle
export default function Title({title,subtitle}){
return (
    <div className="title-block">
        <h1 className="title">{title}</h1>
        <br />
        <h2 className="subtitle">{subtitle} </h2>
        </div>
   )
}