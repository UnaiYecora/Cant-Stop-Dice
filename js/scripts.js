/*
/
/ Dice Functionality
/
*/
function globalJS() {
	//Get random numbers
	function randomDice() { return Math.floor(Math.random() * 6 + 1); }

	//Random number to big dice image
	function numberToBigImg(i) {
		if (i == 1) { return dice01 }
		else if (i == 2) { return dice02 }
		else if (i == 3) { return dice03 }
		else if (i == 4) { return dice04 }
		else if (i == 5) { return dice05 }
		else { return dice06 }
	}

	//Random number to dice character
	function numberToImg(i) {
		if (i == 1) { return dice1 }
		else if (i == 2) { return dice2 }
		else if (i == 3) { return dice3 }
		else if (i == 4) { return dice4 }
		else if (i == 5) { return dice5 }
		else { return dice6 }
	}

	//Print innerHTML
	function print(message) {
		var outputDiv = document.getElementById('output');
		outputDiv.innerHTML = message;
	}

	// Html output
	var html = '';

	//Dice Images (Big)
	var dice01 = '<div style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNDgsNDMuMzAyYy0yLjU5LDAtNC42OTgsMi4xMDctNC42OTgsNC42OThTNDUuNDEsNTIuNjk3LDQ4LDUyLjY5N2MyLjU5MSwwLDQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgUzUwLjU5MSw0My4zMDIsNDgsNDMuMzAyeiI+PC9wYXRoPjxwYXRoIGQ9Ik00OCw4QzI1LjkwOSw4LDgsMjUuOTA4LDgsNDhjMCwyMi4wOTEsMTcuOTA5LDQwLDQwLDQwYzIyLjA5MSwwLDQwLTE3LjkwOSw0MC00MEM4OCwyNS45MDgsNzAuMDkxLDgsNDgsOHogTTY5LjYsMzQuNjA0ICAgdjI2Ljc5MnYwLjAwMWMwLDQuNTI0LTQuMTAzLDguMjAzLTkuMTQ2LDguMjAzSDM1LjU0NWMtNS4wNDMsMC05LjE0Ni0zLjY3OS05LjE0Ni04LjIwM3YtMC4wMDFWMzQuNjA0di0wLjAwMSAgIGMwLTQuNTIyLDQuMTAzLTguMjAzLDkuMTQ2LTguMjAzaDI0LjkwOUM2NS40OTcsMjYuNCw2OS42LDMwLjA4LDY5LjYsMzQuNjA0TDY5LjYsMzQuNjA0eiI+PC9wYXRoPjwvZz48L3N2Zz4=&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';
	var dice02 = '<div class="iconPreview no-attribution" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNTcuOTMxLDUzLjIzMWMtMi41OTEsMC00LjY5OCwyLjEwNy00LjY5OCw0LjY5OHMyLjEwNyw0LjY5OCw0LjY5OCw0LjY5OHM0LjY5OC0yLjEwNyw0LjY5OC00LjY5OCAgIFM2MC41MjEsNTMuMjMxLDU3LjkzMSw1My4yMzF6Ij48L3BhdGg+PHBhdGggZD0iTTM4LjA2OSwzMy4zN2MtMi41OTEsMC00LjY5OCwyLjEwNy00LjY5OCw0LjY5OGMwLDIuNTksMi4xMDcsNC42OTgsNC42OTgsNC42OThjMi41OSwwLDQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgQzQyLjc2NywzNS40NzcsNDAuNjU5LDMzLjM3LDM4LjA2OSwzMy4zN3oiPjwvcGF0aD48cGF0aCBkPSJNNDgsOEMyNS45MDksOCw4LDI1LjkwOCw4LDQ4YzAsMjIuMDkxLDE3LjkwOSw0MCw0MCw0MGMyMi4wOTEsMCw0MC0xNy45MDksNDAtNDBDODgsMjUuOTA4LDcwLjA5MSw4LDQ4LDh6IE02OS42LDYxLjM5NiAgIGMwLDQuNTI0LTQuMTAzLDguMjAzLTkuMTQ2LDguMjAzSDM1LjU0NWMtNS4wNDMsMC05LjE0Ni0zLjY3OS05LjE0Ni04LjIwM1YzNC42MDNjMC00LjUyMyw0LjEwMy04LjIwMyw5LjE0Ni04LjIwM2gyNC45MDkgICBjNS4wNDMsMCw5LjE0NiwzLjY4LDkuMTQ2LDguMjAzVjYxLjM5NnoiPjwvcGF0aD48L2c+PC9zdmc+&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';
	var dice03 = '<div class="iconPreview no-attribution" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNDgsOEMyNS45MDksOCw4LDI1LjkwOCw4LDQ4YzAsMjIuMDkxLDE3LjkwOSw0MCw0MCw0MGMyMi4wOTEsMCw0MC0xNy45MDksNDAtNDBDODgsMjUuOTA4LDcwLjA5MSw4LDQ4LDh6IE02OS4zMzMsNjEuMjMyICAgYzAsNC40NjctNC4wNTIsOC4xMDEtOS4wMzIsOC4xMDFIMzUuN2MtNC45ODEsMC05LjAzMy0zLjYzNC05LjAzMy04LjEwMlYzNC43NjhjMC00LjQ2Nyw0LjA1Mi04LjEwMSw5LjAzMy04LjEwMWgyNC42ICAgYzQuOTgxLDAsOS4wMzMsMy42MzQsOS4wMzMsOC4xMDJWNjEuMjMyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOC4xOTEsMzMuNTQ1Yy0yLjU2MiwwLTQuNjQ2LDIuMDg0LTQuNjQ2LDQuNjQ2czIuMDg0LDQuNjQ2LDQuNjQ2LDQuNjQ2czQuNjQ2LTIuMDg0LDQuNjQ2LTQuNjQ2ICAgUzQwLjc1MywzMy41NDUsMzguMTkxLDMzLjU0NXoiPjwvcGF0aD48cGF0aCBkPSJNNTcuODA5LDUzLjE2MWMtMi41NjMsMC00LjY0NywyLjA4NS00LjY0Nyw0LjY0N3MyLjA4NSw0LjY0Niw0LjY0Nyw0LjY0NnM0LjY0Ni0yLjA4NCw0LjY0Ni00LjY0NiAgIFM2MC4zNzEsNTMuMTYxLDU3LjgwOSw1My4xNjF6Ij48L3BhdGg+PHBhdGggZD0iTTQ4LjAwMSw0My4zNTNjLTEuMjQyLDAtMi40MDksMC40ODMtMy4yODcsMS4zNjJjLTAuODc4LDAuODc3LTEuMzYxLDIuMDQ0LTEuMzYxLDMuMjg1YzAsMS4yNDEsMC40ODMsMi40MDcsMS4zNjEsMy4yODUgICBzMi4wNDQsMS4zNjEsMy4yODUsMS4zNjFjMS4yNDEsMCwyLjQwOC0wLjQ4MywzLjI4OC0xLjM2M2MwLjExMi0wLjExMywwLjIxOC0wLjIzLDAuMzE2LTAuMzUyICAgYzEuNTEyLTEuODUzLDEuMzc2LTQuNTI2LTAuMzE3LTYuMjE4QzUwLjQwOSw0My44MzYsNDkuMjQyLDQzLjM1Myw0OC4wMDEsNDMuMzUzeiI+PC9wYXRoPjwvZz48L3N2Zz4=&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';
	var dice04 = '<div class="iconPreview no-attribution" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNTcuOTMyLDMzLjM2OWMtMi41OTEsMC00LjY5OSwyLjEwOC00LjY5OSw0LjY5OXMyLjEwOCw0LjY5OCw0LjY5OSw0LjY5OHM0LjY5OC0yLjEwNyw0LjY5OC00LjY5OCAgIFM2MC41MjIsMzMuMzY5LDU3LjkzMiwzMy4zNjl6Ij48L3BhdGg+PHBhdGggZD0iTTM4LjA2OSw0Mi43NjZjMi41OSwwLDQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4YzAtMi41OTEtMi4xMDctNC42OTgtNC42OTgtNC42OThjLTIuNTkxLDAtNC42OTgsMi4xMDctNC42OTgsNC42OTggICBDMzMuMzcxLDQwLjY1OCwzNS40NzgsNDIuNzY2LDM4LjA2OSw0Mi43NjZ6Ij48L3BhdGg+PHBhdGggZD0iTTM4LjA2OSw1My4yMzFjLTIuNTksMC00LjY5OCwyLjEwNy00LjY5OCw0LjY5N2MwLDIuNTkxLDIuMTA3LDQuNjk4LDQuNjk4LDQuNjk4czQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgQzQyLjc2Nyw1NS4zMzksNDAuNjYsNTMuMjMxLDM4LjA2OSw1My4yMzF6Ij48L3BhdGg+PHBhdGggZD0iTTU3LjkzMSw1My4yMzFjLTIuNTkxLDAtNC42OTgsMi4xMDctNC42OTgsNC42OTdjMCwyLjU5MSwyLjEwNyw0LjY5OCw0LjY5OCw0LjY5OHM0LjY5OC0yLjEwNyw0LjY5OC00LjY5OCAgIEM2Mi42MjksNTUuMzM5LDYwLjUyMSw1My4yMzEsNTcuOTMxLDUzLjIzMXoiPjwvcGF0aD48cGF0aCBkPSJNNDgsOEMyNS45MDksOCw4LDI1LjkwOCw4LDQ4YzAsMjIuMDkxLDE3LjkwOSw0MCw0MCw0MGMyMi4wOTEsMCw0MC0xNy45MDksNDAtNDBDODgsMjUuOTA4LDcwLjA5MSw4LDQ4LDh6IE02OS42LDYxLjM5NiAgIGMwLDQuNTI0LTQuMTAzLDguMjAzLTkuMTQ2LDguMjAzSDM1LjU0NWMtNS4wNDMsMC05LjE0Ni0zLjY3OS05LjE0Ni04LjIwM1YzNC42MDNjMC00LjUyMyw0LjEwMy04LjIwMyw5LjE0Ni04LjIwM2gyNC45MDkgICBjNS4wNDMsMCw5LjE0NiwzLjY4LDkuMTQ2LDguMjAzVjYxLjM5NnoiPjwvcGF0aD48L2c+PC9zdmc+&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';
	var dice05 = '<div class="iconPreview no-attribution" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMzguMDY5LDQyLjc2N2MyLjU5LDAsNC42OTgtMi4xMDcsNC42OTgtNC42OThzLTIuMTA3LTQuNjk4LTQuNjk4LTQuNjk4Yy0yLjU5MSwwLTQuNjk4LDIuMTA3LTQuNjk4LDQuNjk4ICAgUzM1LjQ3OCw0Mi43NjcsMzguMDY5LDQyLjc2N3oiPjwvcGF0aD48cGF0aCBkPSJNMzguMDY5LDUzLjIzMmMtMi41OSwwLTQuNjk4LDIuMTA3LTQuNjk4LDQuNjk4czIuMTA3LDQuNjk4LDQuNjk4LDQuNjk4czQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgUzQwLjY2LDUzLjIzMiwzOC4wNjksNTMuMjMyeiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny45MzEsNTMuMjMyYy0yLjU5MSwwLTQuNjk4LDIuMTA3LTQuNjk4LDQuNjk4czIuMTA3LDQuNjk4LDQuNjk4LDQuNjk4czQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgUzYwLjUyMSw1My4yMzIsNTcuOTMxLDUzLjIzMnoiPjwvcGF0aD48cGF0aCBkPSJNNDgsNDMuMzAyYy0yLjU5LDAtNC42OTgsMi4xMDctNC42OTgsNC42OThjMCwyLjU5MSwyLjEwNyw0LjY5OCw0LjY5OCw0LjY5OGMyLjU5MSwwLDQuNjk4LTIuMTA3LDQuNjk4LTQuNjk4ICAgQzUyLjY5OCw0NS40MSw1MC41OTEsNDMuMzAyLDQ4LDQzLjMwMnoiPjwvcGF0aD48cGF0aCBkPSJNNTcuOTMyLDMzLjM3MWMtMi41OTEsMC00LjY5OSwyLjEwOC00LjY5OSw0LjY5OXMyLjEwOCw0LjY5OCw0LjY5OSw0LjY5OHM0LjY5OC0yLjEwNyw0LjY5OC00LjY5OCAgIFM2MC41MjIsMzMuMzcxLDU3LjkzMiwzMy4zNzF6Ij48L3BhdGg+PHBhdGggZD0iTTQ4LDhDMjUuOTA5LDgsOCwyNS45MDgsOCw0OGMwLDIyLjA5MSwxNy45MDksNDAsNDAsNDBjMjIuMDkxLDAsNDAtMTcuOTA5LDQwLTQwQzg4LDI1LjkwOCw3MC4wOTEsOCw0OCw4eiBNNjkuNiw2MS4zOTYgICBjMCw0LjUyMy00LjEwMyw4LjIwMy05LjE0Niw4LjIwM0gzNS41NDVjLTUuMDQzLDAtOS4xNDYtMy42OC05LjE0Ni04LjIwM1YzNC42MDNjMC00LjUyMyw0LjEwMy04LjIwMyw5LjE0Ni04LjIwM2gyNC45MDkgICBjNS4wNDMsMCw5LjE0NiwzLjY4LDkuMTQ2LDguMjAzVjYxLjM5NnoiPjwvcGF0aD48L2c+PC9zdmc+&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';
	var dice06 = '<div class="iconPreview no-attribution" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZTM1Zjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOTYgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDk2IDk2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMzguMDY5LDUxLjY5OGMyLjAzOSwwLDMuNjk4LTEuNjU5LDMuNjk4LTMuNjk4cy0xLjY1OS0zLjY5OC0zLjY5OC0zLjY5OFMzNC4zNzEsNDUuOTYxLDM0LjM3MSw0OCAgIFMzNi4wMyw1MS42OTgsMzguMDY5LDUxLjY5OHoiPjwvcGF0aD48cGF0aCBkPSJNMzguMDY5LDM0LjM3MmMtMC45ODcsMC0xLjkxNywwLjM4NS0yLjYxNiwxLjA4M2MtMS40NDIsMS40NDItMS40NDIsMy43ODksMCw1LjIzMWMxLjM5NywxLjM5NiwzLjgzNCwxLjM5Niw1LjIzMS0wLjAwMSAgIGMwLjY5OC0wLjY5OCwxLjA4My0xLjYyNywxLjA4My0yLjYxNWMwLTAuOTg4LTAuMzg1LTEuOTE3LTEuMDgzLTIuNjE2QzM5Ljk4NywzNC43NTYsMzkuMDU5LDM0LjM3MiwzOC4wNjksMzQuMzcyeiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny45MzYsNTQuMjMzaC0wLjAwOGMtMC45ODcsMC0xLjkxNSwwLjM4NS0yLjYxMiwxLjA4M2MtMC42OTgsMC42OTgtMS4wODMsMS42MjctMS4wODMsMi42MTVzMC4zODUsMS45MTcsMS4wODMsMi42MTUgICBjMC41MjQsMC41MjQsMS4xODUsMC44NzUsMS45MDcsMS4wMTRjMS4yMSwwLjIzNSwyLjQ1OC0wLjE0OCwzLjMyNC0xLjAxNGMxLjQ0MS0xLjQ0MywxLjQ0MS0zLjc5LDAtNS4yMyAgIEM1OS44NDksNTQuNjE4LDU4LjkyMSw1NC4yMzMsNTcuOTM2LDU0LjIzM3oiPjwvcGF0aD48cGF0aCBkPSJNMzguMDczLDU0LjIzM2gtMC4wMDhjLTAuOTg2LDAtMS45MTQsMC4zODUtMi42MTIsMS4wODNzLTEuMDgzLDEuNjI3LTEuMDgzLDIuNjE1YzAsMC45ODgsMC4zODUsMS45MTcsMS4wODMsMi42MTUgICBjMC44NjYsMC44NjYsMi4xMTgsMS4yNDksMy4zMjEsMS4wMTRjMC43MjUtMC4xMzksMS4zODUtMC40ODksMS45MS0xLjAxNGMwLjY5OC0wLjY5OCwxLjA4My0xLjYyNywxLjA4My0yLjYxNSAgIHMtMC4zODUtMS45MTctMS4wODMtMi42MTVDMzkuOTg2LDU0LjYxOCwzOS4wNTksNTQuMjMzLDM4LjA3Myw1NC4yMzN6Ij48L3BhdGg+PHBhdGggZD0iTTYwLjU0Nyw0MC42ODVjMS40NDEtMS40NCwxLjQ0MS0zLjc4NywwLTUuMjNjLTAuNjk4LTAuNjk4LTEuNjI4LTEuMDgzLTIuNjE2LTEuMDgzcy0xLjkxNywwLjM4NC0yLjYxNSwxLjA4MyAgIGMtMS40NDIsMS40NDItMS40NDIsMy43ODksMCw1LjIzQzU2LjcxMiw0Mi4wODIsNTkuMTQ4LDQyLjA4Myw2MC41NDcsNDAuNjg1eiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny45MzIsNDQuMzAyYy0yLjAzOSwwLTMuNjk4LDEuNjU5LTMuNjk4LDMuNjk4czEuNjU5LDMuNjk4LDMuNjk4LDMuNjk4czMuNjk3LTEuNjU5LDMuNjk3LTMuNjk4ICAgUzU5Ljk3MSw0NC4zMDIsNTcuOTMyLDQ0LjMwMnoiPjwvcGF0aD48cGF0aCBkPSJNNDgsOEMyNS45MDksOCw4LDI1LjkwOCw4LDQ4YzAsMjIuMDkxLDE3LjkwOSw0MCw0MCw0MGMyMi4wOTEsMCw0MC0xNy45MDksNDAtNDBDODgsMjUuOTA4LDcwLjA5MSw4LDQ4LDh6IE02OS42LDYxLjM5NiAgIGMwLDAuMjgyLTAuMDE2LDAuNTYyLTAuMDQ4LDAuODM4Yy0wLjQ2OSw0LjEzMi00LjM2OSw3LjM2NS05LjA5OCw3LjM2NUgzNS41NDZjLTQuNzI4LDAtOC42MjktMy4yMzQtOS4wOTktNy4zNjUgICBjLTAuMDMyLTAuMjc1LTAuMDQ3LTAuNTU2LTAuMDQ3LTAuODM4VjM0LjYwM2MwLTAuMjgzLDAuMDE2LTAuNTYyLDAuMDQ3LTAuODM3YzAuNDY5LTQuMTMxLDQuMzcxLTcuMzY1LDkuMDk5LTcuMzY1aDI0LjkwOSAgIGM0LjcyOSwwLDguNjI5LDMuMjM0LDkuMDk4LDcuMzY1YzAuMDMxLDAuMjc1LDAuMDQ4LDAuNTU1LDAuMDQ4LDAuODM3VjYxLjM5NnoiPjwvcGF0aD48L2c+PC9zdmc+&quot;);display: inline-block;width: 70px;height: 70px;background-size: contain;background-repeat: no-repeat;"></div>';

	//Dice Images (Small)
	var dice1 = '⚀';
	var dice2 = '⚁';
	var dice3 = '⚂';
	var dice4 = '⚃';
	var dice5 = '⚄';
	var dice6 = '⚅';

	//Random dices
	var d1 = randomDice();
	var d2 = randomDice();
	var d3 = randomDice();
	var d4 = randomDice();

	//Dice combinations
	var res1a = d1 + d2;
	var res1b = d3 + d4;
	var res2a = d1 + d3;
	var res2b = d2 + d4;
	var res3a = d1 + d4;
	var res3b = d2 + d3;

	//Dices
	html = '<h2 id="roll">' + numberToBigImg(d1) + ' ' + numberToBigImg(d2) + ' ' + numberToBigImg(d3) + ' ' + numberToBigImg(d4) + '</h2>';

	//Combinations

	//First combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res1a + ' <span>and</span> ' + res1b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d2) + ' </strong>/<strong> ' + numberToImg(d3) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Second combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res2a + ' <span>and</span> ' + res2b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d3) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d4) + '</strong></p></div>';

	//Third combination
	html += '<div class="combination"><p>You can move on: </p>';
	html += '<h2 class="combinationDice">' + res3a + ' <span>and</span> ' + res3b + '</h2>';
	html += '<p><strong>' + numberToImg(d1) + ' ' + numberToImg(d4) + ' </strong>/<strong> ' + numberToImg(d2) + ' ' + numberToImg(d3) + '</strong></p></div>';

	return print(html);
}
