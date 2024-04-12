import Link from "next/link";

export default function NavItems() {
    return (
        <div id="NavItems" className="flex flex-col gap-3">
            <Link href={"#"} className="nav-item">Home</Link>            
            <Link href={"#"} className="nav-item">Marketplace</Link>            
            <Link href={"#"} className="nav-item">Auctions</Link>            
            <Link href={"#"} className="nav-item">Drop</Link>            
        </div>
    )
}