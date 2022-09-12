import homeimage from "../images/homeimage.png";
function Home() {
  

    return <>
        <div className="div">
            <div className="divv">
                <div className="heading">
                <h1>Welcome!</h1>
                </div>

            </div>
            <div className="divvimage">
                <img id="imgl" src={homeimage}></img>
            </div>
        </div>
    </>
}
export default Home;