﻿namespace FridgeOfWebHunter.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T GetById(int id);
        Task<T> GetByIdAsync(int id);

        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();

        void Add(T item);
        Task AddAsync(T item);

        void Update(T item);
        Task UpdateAsync(T item);

        void Remove(T item);
        Task RemoveAsync(T item);
    }
}
