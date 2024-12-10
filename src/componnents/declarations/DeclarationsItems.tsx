import { Declaration } from '@/types/Declaration'
import DeclarationsItem from './DeclarationsItem';

function DeclarationsItems(props: any) {
    const { declarations } = props;
    return (
        <div>
            <article className="grid grid-cols-12 items-center font-extrabold">
                <span className={`p-2 `}>Date</span>
                <span className={`p-2 col-span-2`}>Enfant</span>
                <span className={`p-2 `}>Date Naiss</span>
                <span className={`p-2 `}>Hopital</span>
                <span className={`p-2 col-span-2 text-center`}>Parent 1</span>
                <span className={`p-2 col-span-2`}>Parent 2</span>
                <span className={`p-2 text-center`}>Status</span>
                <span className={`p-2 col-span-2 text-center`}>ACTIONS</span>
            </article>
            {declarations.map((item: Declaration, index: number) => (
                <DeclarationsItem declaration={item} index={index} key={item.id} />
            ))
            }
        </div>
    )
}

export default DeclarationsItems