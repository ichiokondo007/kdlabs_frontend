"use client";

export default function Header() {
    return (
        <header className="h-[75px] bg-gray-900 text-white fixed top-0 w-full flex items-center justify-between px-4">
            {/* ロゴ */}
            <div className="flex">
                <img src="/img/kd_logo114.png" alt="KDLabs" className="h-[65px] w-auto" />
            </div>
            {/* メニュー */}
            <nav className="flex gap-5">
                <a href="#" className="text-white text-lg p-2 hover:opacity-50">Top</a>
                <a href="#" className="text-white text-lg p-2 hover:opacity-50">FabricJs</a>
                <a href="#" className="text-white text-lg p-2 hover:opacity-50">CRDT-Form</a>
                <a href="#" className="text-white text-lg p-2 hover:opacity-50">CRDT-FablicJs</a>
                <a href="#" className="text-white text-lg p-2 hover:opacity-50">DDL</a>
            </nav>
            {/* ユーザーアイコン */}
            <div className="flex">
                <img src="/img/user.svg" alt="user" className="h-[60px] w-auto invert" />
            </div>
        </header>
    );
}