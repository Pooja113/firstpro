import { LoaderContext } from 'context/loader'
import useGet from 'hooks/useGet'
import { useContext, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Question from './Question'

const Questions = () => {
  const { refetch, data: studentData, isLoading } = useGet('fetchQuesions', 'admin/getQuestions', true)
  const { setLoader } = useContext(LoaderContext)

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    setLoader(true)
    if (studentData?.data?.length > 0) {
      setLoader(false)
    }
  }, [isLoading])

  const answer = () => {
    return
  }

  return (
    <>
      <Header />
      {!isLoading && (
        <h3 style={{ textAlign: 'right', color: 'blue' }}>{'Total Questions :' + studentData?.data?.length}</h3>
      )}

      <div>
        {studentData?.data?.map((item: any, index: any) => {
          return (
            <Question
              key={`question-no-${index}`}
              index={index}
              data={item}
              answerFunc={answer}
              answerKey={item?.key[0]}
              category={item?.questionCategory}
            />
          )
        })}
      </div>
      {!isLoading && <Footer />}
    </>
  )
}

export default Questions
