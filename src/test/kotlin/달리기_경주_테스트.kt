import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class 달리기_경주_테스트 {
    @Test
    fun test1() {
        val players = arrayOf("mumu", "soe", "poe", "kai", "mine")
        val callings = arrayOf("kai", "kai", "mine", "mine")
        val problem = 달리기_경주()
        assertArrayEquals(arrayOf("mumu", "kai", "mine", "soe", "poe"), problem.solution(players, callings))
    }
}