class 달리기_경주 {
    fun solution(players: Array<String>, callings: Array<String>): Array<String> {
        val playerMap = players.mapIndexed { index, player -> player to index }.toMap().toMutableMap()

        callings.forEach {
            val itemIndex = playerMap[it]
            if (itemIndex != null && itemIndex > 0) {
                val previousItem = playerMap[players[itemIndex - 1]]
                playerMap[it] = itemIndex - 1
                playerMap[players[itemIndex - 1]] = previousItem!! + 1
                players[itemIndex] = players[itemIndex - 1].also { players[itemIndex - 1] = players[itemIndex] }
            }
        }
        return players
    }
}