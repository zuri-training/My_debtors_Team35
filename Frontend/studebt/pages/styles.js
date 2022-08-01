import Link from "next/link"
const styles = () => {
    return (
        <div>
            <h1>Style Guides</h1>
            <input type="text" placeholder="placeholder" />
            <input type="text" placeholder="placeholder" className="success" />
            <input type="text" placeholder="placeholder" className="warning" />
            <input type="text" placeholder="placeholder" className="error" /> <br />
            <h6>Primary Button</h6>
            <button className="btn btn-sec">Button</button>
            <h6>Secondary Button</h6>
            <button className="btn btn-pri">Button</button>
            <Link href={''}>
                <a href="" className="btn btn-pri">Home</a>
            </Link>
        </div>
    )
}

export default styles