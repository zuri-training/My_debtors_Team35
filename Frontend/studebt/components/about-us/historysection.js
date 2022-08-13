
function HistorySection(props) {
    return (

        <div className="grid px-4 md:px-8 mx-0 my-4 justify-content-center">
            <div className="col-12 md:col-3">
                <div className="bg-blue-400 shadow-2 p-3 border-1 border-50 border-round-md py-4">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <div className="text-white font-bold text-xl">2022</div>
                        </div>
                    </div>
                    <span
                        style={{
                            borderBottom: "3px solid #ffffff",
                            borderWidth: "3px",
                            paddingBottom: "6px"
                        }}
                        className="text-white">Founded</span>
                </div>
            </div>
            <div className="col-12 md:col-3">
                <div className="bg-primary shadow-2 p-3 border-1 border-50 border-round-md py-4">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <div className="text-white font-bold text-xl">2K +</div>
                        </div>
                    </div>
                    <span
                        style={{
                            borderbottom: "3px solid #ffffff",
                            padding-bottom: "6px"
                        }}
                        className="text-white">Partners</span>
                </div>
            </div>
            <div className="col-12 md:col-3">
                <div className="bg-blue-600 shadow-2 p-3 border-1 border-50 border-round-md py-4">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <div className="text-white font-bold text-xl">20K +</div>
                        </div>
                    </div>
                    <span
                        style={{
                            borderBottom: "3px solid #ffffff",
                            paddingBottom: "6px"
                        }}
                        className="text-white">Registered students</span>
                </div>
            </div>
        </div>

    );
}

export default HistorySection;