<script lang="ts">
	import data from '$lib/data.json';
	import Question from '$components/Question.svelte';
	import womanImageMobile from '$assets/illustration-woman-online-mobile.svg';
	import womanImageDesktop from '$assets/illustration-woman-online-desktop.svg';
	import boxImageDesktop from '$assets/illustration-box-desktop.svg';
	import bgPatternMobile from '$assets/bg-pattern-mobile.svg';
	import bgPatternDesktop from '$assets/bg-pattern-desktop.svg';
</script>

<section class="relative">
	<div class="bg-white rounded px-6 py-12 lg:px-24 lg:py-[60px] lg:overflow-hidden shadow">
		<div class="relative pb-[80px] lg:hidden">
			<img
				src={womanImageMobile}
				alt="an animated person operating a desktop computer with touch gesture"
				class="absolute -top-[157px] mx-auto inset-0 w-[240px] z-10"
			/>
			<img src={bgPatternMobile} alt="" class="absolute mx-auto inset-0 -top-[48px] w-[240px]" />
		</div>

		<div class="hidden lg:block relative">
			<img
				src={womanImageDesktop}
				alt="an animated person operating a desktop computer with touch gesture"
				class="absolute w-[470px] -left-[175px] z-10"
			/>
			<img src={bgPatternDesktop} alt="" class="absolute max-w-none -left-[670px] -top-[375px]" />
		</div>

		<article class="lg:w-1/2 ml-auto mr-0">
			<h1
				class="text-very-dark-desaturated-blue text-xl uppercase font-bold text-center lg:text-left"
			>
				faq
			</h1>
			{#each data as { question, answer }, index}
				<Question {question} {answer} id={index.toString()} />
			{/each}
		</article>
	</div>
	<img
		src={boxImageDesktop}
		alt=""
		class="hidden lg:block absolute -left-[93px] top-[200px] z-20"
	/>
</section>
