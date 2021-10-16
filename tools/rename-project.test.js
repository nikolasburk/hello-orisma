const rewire = require("rewire")
const rename_project = rewire("./rename-project")
const main = rename_project.__get__("main")
// @ponicode
describe("main", () => {
    test("0", async () => {
        await main()
    })
})
