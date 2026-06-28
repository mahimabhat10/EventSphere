export default function Categories() {

const items=[
"Music",
"Technology",
"Business",
"Sports",
"Education",
"Food",
"Startup",
"Gaming"
];

return(

<section className="bg-[#050816] py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="mb-12 text-center text-5xl font-black text-white">
Browse Categories
</h2>

<div className="grid grid-cols-2 gap-6 md:grid-cols-4">

{items.map(item=>(

<div
key={item}
className="cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br from-[#141b33] to-[#0b1022] p-10 text-center text-white transition hover:scale-105 hover:border-cyan-400"
>

{item}

</div>

))}

</div>

</div>

</section>

)


}