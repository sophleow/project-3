const boardService = require("../services/board.service");

class BoardController {
	async updateBoard(req, res) {
		try {
			const { board } = req.body;
			const result = await boardService.updateBoard(req.user.email, req.body);
			res.status(result.status);
			res.json({ data: result.data, message: result.message });
		} catch (err) {
			console.log("board controller error caught", err);
			return res.status(400).json({ message: err });
		}
	}
}

module.exports = BoardController;
