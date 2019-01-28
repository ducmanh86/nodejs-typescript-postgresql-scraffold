import {ArticleService} from '../../src/services/article.service'
import {Article} from '../../src/models/article.model'
import {EmptyMockRepository} from '../../src/repositories/empty_mock_repository'
import {SingleMockRepository} from '../../src/repositories/single_mock_repository'

test('getArticles_noArticlesInDB_emptyList', async() => {
  const articleManager = new ArticleService(new EmptyMockRepository())
  const articles: Article[] = await articleManager.getArticles()

  expect(articles.length).toBe(0)
})

test('getArticles_oneArticleInDB_ListOfOneArticle', async() => {
  const articleManager = new ArticleService(new SingleMockRepository())
  const articles: Article[] = await articleManager.getArticles()

  expect(articles.length).toBe(1)
})
