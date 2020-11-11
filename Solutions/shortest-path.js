// [
// 	[0, 0, 0, 0],
// 	[0, 1, 1, 0],
// 	[0, 1, 1, 0],
// 	[0, 0, 0, 0],
// ];

const weights = {};

const getShortestPathLength = (maze, x = 0, y = 0, visited = []) => {
	if (x < 0 || y < 0) return Infinity;
	if (maze.length <= y || maze[y][x] === 1) return Infinity;
	if (maze[y].length <= x || maze[y][x] === 1) return Infinity;
	if (visited.includes(`${x}-${y}`)) return 0;

	console.log("x, y ******------>>>>>>", x, y, visited);
	return Math.max(
		getShortestPathLength(maze, x + 1, y, [...visited, `${x}-${y}`]),
		getShortestPathLength(maze, x - 1, y, [...visited, `${x}-${y}`]),
		getShortestPathLength(maze, x, y + 1, [...visited, `${x}-${y}`]),
		getShortestPathLength(maze, x, y - 1, [...visited, `${x}-${y}`])
	);
};

const maze = [
	[0, 0, 0, 0],
	[0, 1, 1, 0],
	[0, 1, 1, 0],
	[0, 8, 9, 0],
];

console.log(
	"getShortestPathLength(maze) ******------>>>>>>",
	getShortestPathLength(maze)
);
