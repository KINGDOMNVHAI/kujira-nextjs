import { useRouter } from 'next/navigation';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function PaginationControls({
    page, per_page,
    totalResult,
    hasNextPage, hasPervPage
}) {

    const router = useRouter();

    const lastPage = Math.ceil(totalResult / per_page);

    var prevPage = page - 1;
    var nextPage = page + 1;

    // If page = 1
    const NextFirstPage = () => {
        return prevPage > 2 ? (
            <li className="page-item">
                <a className="page-link"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/?page=2&per_page=${per_page}`)
                    }}>
                    2
                </a>
            </li>
        ) : (
            ''
        )
    }

    const EtcPervPage = () => {
        return prevPage > 3 ? (
            <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
        ) : (
            ''
        )
    }

    // If page = 3 -> show 1,2
    const PervPage = () => {
        return prevPage > 1 ? (
            <li className="page-item">
                <a className="page-link"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/?page=${prevPage}&per_page=${per_page}`)
                    }}>
                    {prevPage}
                </a>
            </li>
        ) : (
            ''
        )
    }

    const CurrentPage = () => {
        return page > 1 && page < lastPage ? (
            <li className="page-item">
                <a className="page-link disabled"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/?page=${page}&per_page=${per_page}`)
                    }}>
                    {page}
                </a>
            </li>
        ) : (
            ''
        )
    }

    // If page = 3 -> show 4,5
    const NextPage = () => {
        return nextPage < lastPage ? (
            <li className="page-item">
                <a className="page-link"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/?page=${nextPage}&per_page=${per_page}`)
                    }}>
                    {nextPage}
                </a>
            </li>
        ) : (
            ''
        )
    }

    // If page = 5 -> show ...,4,6,...
    const EtcNextPage = () => {
        return nextPage < lastPage - 2 ? (
            <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
        ) : (
            ''
        )
    }

    const PrevLastPage = () => {
        return nextPage < lastPage - 1 ? (
            <li className="page-item">
                <a className="page-link"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(`/?page=${lastPage - 1}&per_page=${per_page}`)
                    }}>
                    {lastPage - 1}
                </a>
            </li>
        ) : (
            ''
        )
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination pagination-reset justify-content-center">
                <li className={`page-item ${!hasPervPage ? "disabled" : ""}`} >
                    <a className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(`/?page=${page - 1}&per_page=${per_page}`)
                        }}
                        tabIndex="-1" aria-disabled={!hasPervPage}
                    >
                        <HiChevronLeft size={24}/>
                    </a>
                </li>

                <li className={`page-item ${page == 1 ? "disabled" : ""}`}>
                    <a className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(`/?page=1&per_page=${per_page}`)
                        }}>
                        1
                    </a>
                </li>

                <NextFirstPage />
                <EtcPervPage />
                <PervPage />
                <CurrentPage />
                <NextPage />
                <EtcNextPage />
                <PrevLastPage />

                <li className={`page-item ${page == lastPage ? "disabled" : ""}`}>
                    <a className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(`/?page=${lastPage}&per_page=${per_page}`)
                        }}>
                        {lastPage}
                    </a>
                </li>

                <li className={`page-item ${!hasNextPage ? "disabled" : ""}`} >
                    <a className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push(`/?page=${page + 1}&per_page=${per_page}`)
                        }}
                        aria-disabled={!hasNextPage}
                    >
                        <HiChevronRight size={24}/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}



{/* <li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">2</a></li>
<li className="page-item d-none d-md-inline-block"><a className="page-link" href="#">3</a></li>
<li className="page-item"><a className="page-link" href="#">...</a></li> */}
