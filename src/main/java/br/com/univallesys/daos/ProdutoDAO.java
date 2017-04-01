package br.com.univallesys.daos;

import br.com.univallesys.models.Produto;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class ProdutoDAO {

	@PersistenceContext
	private EntityManager manager;

	public List<Produto> all() {
		return manager.createQuery("select p from produtos p", Produto.class).getResultList();
	}

	public void save(Produto produto) {
		manager.persist(produto);
	}

	public Produto findById(Integer id) {
		return manager.find(Produto.class, id);
	}

	public void remove(Produto produto) {
		manager.remove(produto);
	}

	public void update(Produto produto) {
		manager.merge(produto);
	}

}