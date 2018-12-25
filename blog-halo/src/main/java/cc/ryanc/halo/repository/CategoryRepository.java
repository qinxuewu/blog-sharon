package cc.ryanc.halo.repository;

import cc.ryanc.halo.model.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * <pre>
 *     分类持久层
 * </pre>
 *
 * @author : RYAN0UP
 * @date : 2017/11/30
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {

    /**
     * 根据分类目录路径查询，用于验证是否已经存在该路径
     *
     * @param cateUrl cateUrl 文章url
     * @return Category
     */
    Category findCategoryByCateUrl(String cateUrl);

    /**
     * 根据分类名称查询
     *
     * @param cateName 分类名称
     * @return Category
     */
    Category findCategoryByCateName(String cateName);

    /**
     * 根据分类查询文章总数
     *
     * @return Long
     */
    @Query(value = "select count(1) from halo_posts_categories where cate_id=:cateId", nativeQuery = true)
    Long getCategoryPostCount(@Param("cateId") Long cateId);
}
