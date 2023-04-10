const CardOfChart = function ({ role }: { role: string }) {
    return (
        <div className="w-fit mx-auto">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-3 max-[400px]:px-1  sm:px-7 py-2 sm:py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-4 sm:space-x-6">
                    <p className="text-slate-800 max-sm:text-xs">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default CardOfChart;