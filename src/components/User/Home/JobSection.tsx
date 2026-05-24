export default function JobSection() {
    return (
        <div className="bg-[var(--primary-bg)]">
            <div className="mx-auto my-0 max-w-[var(--site-width)] px-1 py-[50px] flex items-center justify-center flex-col gap-10">
                <div className="flex items-center justify-center flex-col gap-3">
                    <p className="font-bold text-3xl">Featured opportunities</p>
                    <p>Top picks hand-vetted for quality and culture fit</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5 w-full">
                    {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="flex flex-col gap-6 p-4 rounded-3xl shadow-lg">
                            <div className="flex flex-col gap-2 justify-center">
                                <div className="w-[50px] h-[50px]">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfVPJzcTWJzaveHqdEiTTlXBXQ_-iyHOAIQ&s" alt="company" />
                                </div>
                                <div className="text-xl font-bold">Senior Product Designer</div>
                                <div className="text-gray-500">Spotify • Stockholm</div>
                            </div>
                            <div className="flex flex-col gap-2 justify-center">
                                <div className="flex gap-2">
                                    <span className="bg-[var(--secondary-bg)] text-gray-500 px-2 rounded-2xl">Full-time</span>
                                    <span className="bg-[var(--secondary-bg)] text-gray-500 px-2 rounded-2xl">$120k - $160k</span>
                                </div>
                                <div >
                                    <button className="w-full transition-all  px-4 py-2 text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white rounded-xl">Apply now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="px-4 py-2 border rounded-full">View all 12,403 jobs</button>
            </div>
        </div>
    )
}
