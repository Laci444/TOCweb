

function New({ newData }: { newData: New }) {
  
  return (
    <div className="w-11/12 sm:w-3/4 lg:w-1/2 bg-black/[.40] rounded-md grid place-items-center p-3 sm:p-4 lg:p-5 m-2">
      
      <div className="w-full bg-black/[.60] rounded-md text-yellow-500 leading-10 pl-5">
       {newData.categorys.map(cat => cat.name ).join(" | ")}
      </div>

      <div className="w-full bg-black/[.60] rounded-md m-2 p-5">
          <h3 className="text-2xl font-bold">{newData.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: newData.body }}/>
          {newData.image ? <img className="mt-5 max-w-full lg:max-w-sm xl:max-w-xl m-auto" src={newData.image.toString()} alt="A hírhez tartozó kép" /> : ""}
      </div>

      <div className="w-full bg-black/[.60] rounded-md leading-10 px-5">
        <span className="">{newData.date.toString()}</span>
        <span className="float-right">{newData.sign}</span>
      </div>
    </div>
  );
}

export default New;
