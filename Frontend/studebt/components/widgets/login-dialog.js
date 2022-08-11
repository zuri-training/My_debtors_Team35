import { Dialog } from 'primereact/dialog'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import Link from 'next/link'

function LoginDialog(props) {
    const { visible, onHide } = props
    return (
        <Dialog header="Log in" visible={visible} onHide={onHide}>
            <div className="grid align-items-center justify-content-center">
                <div className="col-12 md:col-5 text-center">
                    <Card className="grid justify-content-center align-items-center"title="As a school" >
                    <img className="border-circle shadow-4 mb-4" src="/assets/images/school-popup-image.png" alt="stuDept" 
                        style={ { width: '200px' } } />
                        <Link className="col-12" href="/login/school">
                            <Button label="Log In" className="p-button-raised w-full py-4" />
                        </Link>
                    </Card>
                </div>
                <Divider className="text-700" layout="vertical" > <b>OR</b></Divider>
                <div className="col-12 md:col-5 text-center">
                <Card className="grid justify-content-center align-items-center"title="As a student" >
                    <img className="border-circle shadow-4 mb-4" src="/assets/images/student-popup-image.png" alt="stuDept" 
                        style={ { width: '200px' } } />
                        <Link className="col-12" href="/login/student">
                            <Button label="Log In" className="p-button-raised w-full py-4" />
                        </Link>
                    </Card>
                </div>
            </div>
        </Dialog>
    )
}

export default LoginDialog;