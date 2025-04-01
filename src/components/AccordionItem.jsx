import { ChevronDownIcon } from '@heroicons/react/24/outline'

function AccordionItem({ val, onOpen, open }) {
    const isOpen = val.id === open

    return <div>
        <div onClick={() => onOpen(val.id)}>
            <p className={`${isOpen ? 'bold' : ''}`}>{val.title}</p>
            <ChevronDownIcon className={`${isOpen ? 'rotate' : ''}`} />
        </div>
        <div className={`${isOpen ? 'see' : ''}`}>
            {val.text}
        </div>
    </div>
}

export default AccordionItem