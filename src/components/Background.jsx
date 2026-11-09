import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
		let isTicking = false

		const updatePositions = () => {
			const scrollY = window.pageYOffset

			blobRefs.current.forEach((blob, index) => {
				if (!blob) return
				const initialPos = initialPositions[index]
				const xOffset = Math.sin(scrollY / 180 + index * 0.5) * 100
				const yOffset = Math.cos(scrollY / 180 + index * 0.5) * 25

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				blob.style.transform = `translate3d(${x}px, ${y}px, 0)`
			})

			isTicking = false
		}

		const handleScroll = () => {
			if (!isTicking) {
				window.requestAnimationFrame(updatePositions)
				isTicking = true
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			<div className="absolute inset-0">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl will-change-transform"></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-96 h-96 bg-cyan-600/15 rounded-full filter blur-3xl will-change-transform hidden sm:block"></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-20%] md:left-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl will-change-transform"></div>
				<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-96 h-96 bg-indigo-600/15 rounded-full filter blur-3xl will-change-transform hidden sm:block"></div>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)] bg-[size:24px_24px]"></div>
		</div>
	)
}

export default AnimatedBackground
