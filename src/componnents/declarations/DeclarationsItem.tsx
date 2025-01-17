import ActionButton from "@/shared/ActionButton";
import StatusBadge from "@/shared/StatusBadge";
import { Declaration } from "@/types/Declaration";
import { formatDate } from "@/utils";

type Props = {
    declaration: Declaration;
    index: number;
    action: (data: { id: string, status: string }) => void;
}

function DeclarationsItem({ declaration: item, index, action }: Props) {
    return (
        <article className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${index % 2 === 0 ? 'bg-gray-100' : null}`}>
            <span className={`p-2`}>{formatDate(item.registered)}</span>
            <span className={`p-2 col-span-2 flex flex-col`}>
                <span>{item.child.firstName}</span>
                <span className="uppercase">{item.child.lastName}</span>
            </span>
            <span className={`p-2`}>{formatDate(item.child.birthDate)}</span>
            <span className={`p-2 `}>
                <span>{item.company.name}</span>
            </span>
            <span className={`p-2 col-span-2 flex flex-col text-center`}>
                <span>{item.firstParent.firstName}</span>
                <span className="uppercase">{item.firstParent.lastName}</span>
            </span>
            <span className={`p-2 col-span-2 flex flex-col`}>
                <span>{item.secondParent.firstName}</span>
                <span className="uppercase">{item.secondParent.lastName}</span>
            </span>

            <StatusBadge status={item.status} />
            <ActionButton classes="p-2 col-span-2" action={action} id={`${item.id}`}>

            </ActionButton>
        </article>
    );
}

export default DeclarationsItem