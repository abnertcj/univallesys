package br.com.univallesys.daos;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import br.com.univallesys.models.GrupoDeProdutos;

@Repository
public class GrupoProdutosDAO {

	@PersistenceContext
	private EntityManager manager;

	public List<GrupoDeProdutos> all() {
		return manager.createQuery("select g from GrupoDeProdutos g", GrupoDeProdutos.class).getResultList();
	}

	public void save(GrupoDeProdutos grupo) {
		manager.persist(grupo);
	}

	public GrupoDeProdutos findById(Integer id) {
		return manager.find(GrupoDeProdutos.class, id);
	}

	public void remove(GrupoDeProdutos grupo) {
		manager.remove(grupo);
	}

	public void update(GrupoDeProdutos grupo) {
		manager.merge(grupo);
	}

	public List<GrupoDeProdutos> findByGrupo(String grupo) {
		Query query = manager.createQuery("select g from GrupoDeProdutos g where g.getProduct_group_id LIKE :grupo",
				GrupoDeProdutos.class);
		query.setParameter("grupo", "%" + grupo);
		return query.getResultList();
	}

	public List<GrupoDeProdutos> findByGrupoLambda(String grupo) {
		Stream<GrupoDeProdutos> streamPessoas = all().stream();
		return streamPessoas.filter(p -> p.getProduct_group_id().startsWith(grupo)).collect(Collectors.toList());
	}

}
