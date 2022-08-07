
import { Accordion, AccordionTab } from 'primereact/accordion'

function Faq(props) {
    return (
        <div className="surface-0 text-center px-4 md:px-8 my-8">
            <section>
                <h3 className="text-4xl font-bold mb-6">Frequently asked questions</h3>
            </section>
            <section>
                <Accordion>
                    <AccordionTab className="my-4" header="What will happen if I don’t pay up before deadline?">
                        <p>Lorie Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </AccordionTab>
                    <AccordionTab className="my-4" header="What is the deadline for the payment of my debt?">
                        <p>Lorie Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </AccordionTab>
                    <AccordionTab className="my-4" header="Can I pay instalmentally?">
                        <p>Loriem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi interdum nisi, euismod euismod nisi nisi euismod nisi nisi interdum nisi.</p>
                    </AccordionTab>
                    <AccordionTab className="my-4" header="Can I pay instalmentally?">
                        <p>Lorie Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </AccordionTab>
                    <AccordionTab className="my-4" header="What are debtors not allowed to do?">
                        <p>Loriem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi interdum nisi, euismod euismod nisi nisi euismod nisi nisi interdum nisi.</p>
                    </AccordionTab>
                </Accordion>
            </section>
        </div>
    )
}

export default Faq;