function Error404(props) {
    return (
        <>
            <header>
                <img src="/studebt-logo.png" alt="logo" width="200" />
                <h4>stuDEBT</h4>
            </header>
            <div id="error">
                <div id="error-msg">
                    <h1><span>4</span>0<span>4</span></h1>
                    <h2>Something went wrong.</h2>
                    <button>Retry</button>
                </div>
                <div id="error-pic">
                    <img src="/repair-pic.svg" alt="error" width="400px" />
                </div>
            </div>
        </>
    );
}

export default Error404;