const solveOneDimMaze = (maze) => {
	if (maze.length === 0) return true;
	const head = maze[0];
	if (head === 0) return false;

	let retValue = false;

	for (let jump = 1; jump <= head; jump++) {
		retValue = retValue || solveOneDimMaze(maze.slice(jump));
	}
	return retValue;
};
