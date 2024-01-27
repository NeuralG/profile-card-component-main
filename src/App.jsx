export default function App() {
	return (
		<div className="background-main flex min-h-screen items-center justify-center">
			<Card />
		</div>
	)
}

function Card() {
	return (
		<div className="grid w-[350px] grid-rows-[190px_90px_90px] justify-items-center rounded-2xl bg-white text-center">
			<UpperCard />
			<Stats />
		</div>
	)
}

function UpperCard() {
	return (
		<>
			<div className="flex h-full w-full justify-center rounded-2xl bg-[url(./images/bg-pattern-card.svg)] bg-top bg-no-repeat">
				<img
					className="img-border mt-auto rounded-full"
					src="https://raw.githubusercontent.com/NeuralG/profile-card-component-main/main/src/images/image-victor.jpg"
				></img>
			</div>

			<User name="Victor Crest" age="26" city="London" />
		</>
	)
}

function User(props) {
	return (
		<div className="m-auto grid gap-1">
			<div>
				<span className="font-bold text-[--very-dark-blue] hover:cursor-pointer hover:text-[--dark-cyan]">
					{props.name}
				</span>
				<span className="ml-1 text-[--dark-grayish]"> {props.age} </span>
			</div>
			<p className="text-xs text-[--dark-grayish]">{props.city}</p>
		</div>
	)
}

function Stats() {
	return (
		<ul className="row-start-3 flex w-full justify-around border-t-[1px] p-5">
			<Stat amount="80K" stat="Followers" />
			<Stat amount="803K" stat="Likes" />
			<Stat amount="1.4K" stat="Photos" />
		</ul>
	)
}

function Stat(props) {
	return (
		<ol>
			<p className="leading-none">
				<span className="block text-base font-bold text-[--very-dark-blue]">
					{props.amount}
				</span>
				<span className="text-[0.55rem] tracking-widest text-[--dark-grayish]">
					{props.stat}
				</span>
			</p>
		</ol>
	)
}
