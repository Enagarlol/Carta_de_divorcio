<script>
import thankYouImg from "../../public/images/icon-thank-you.svg"

let showComponent = false
window.setTimeout(()=>{showComponent = true}, 0)
</script>

<article class:show={showComponent}>
	<img src={thankYouImg} alt="">
	<h3>Thank you!</h3>
	<p>Thank you for confirming your data! We hope you have fun using our platform. If you ever need support, please feel free to email us at mexicode@gmail.com.</p>
</article>

<style>
article {
	display: flex;
	flex-direction: column;
	align-items: center;	
	transition: 0.3s;
	position: relative;
	right: -10rem;
	opacity: 0;
}

.show {
	opacity: 1;
	right: 0;
}

img {
	width: 56px;
	height: 56px;
	margin-top: 47px;
	margin-bottom: 24px;
}

h3 {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #022959;
	margin-bottom: 9px;
}

p {
	font-weight: 400;
	font-size: 16px;
	line-height: 25px;
	text-align: center;
	color: #9699AA;
	margin-bottom: 47px;
}

@media screen and (min-width: 1366px) {
	img {
		width: 80px;
		height: 80px;
		margin-bottom: 32px;
		margin-top: 125px;
	}

	h3 {
		font-size: 32px;
		line-height: 37px;
		margin-bottom: 14px;
	}
}
</style>